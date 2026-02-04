# Testing the Monday Pizza Promotion

This guide explains how to test the Monday-only pizza promotion without waiting for Monday.

---

## Quick Start

### Option 1: URL Parameter (Easiest)

Add `?testMonday=true` to any URL:

```
http://localhost:3000?testMonday=true
http://localhost:3000/menu/pizza?testMonday=true
```

### Option 2: Browser Console

Open browser DevTools (F12) → Console tab → Run:

```javascript
// Enable test mode
localStorage.setItem('testMondayPromo', 'true');
location.reload();

// Disable test mode
localStorage.removeItem('testMondayPromo');
location.reload();
```

### Option 3: Dev Tools Panel

In development mode, a dev tools panel appears at the top of the page showing:
- Current Mazatlán time
- Whether it's Monday
- Whether it's business hours (1 PM - 10 PM)
- Test mode status
- Toggle button to enable/disable test mode

To show dev tools in production:
```
http://yoursite.com?showDevTools=true
```

---

## Testing Scenarios

### Test 1: Verify Promo Shows on "Monday"

1. Enable test mode (see Quick Start)
2. Add a pizza to cart
3. Open the cart drawer
4. **Expected:** "PROMO PIZZA LOVERS" section should appear
5. You should see drink options ($89) and cookie options (FREE)

### Test 2: Verify Promo is Hidden on Non-Monday

1. Disable test mode:
   ```javascript
   localStorage.removeItem('testMondayPromo');
   location.reload();
   ```
2. Add a pizza to cart
3. Open the cart drawer
4. **Expected:** No promotion section visible

### Test 3: Auto-Cleanup When Promo Ends

1. Enable test mode
2. Add pizza to cart
3. Add promotional drink ($89)
4. Add free cookie
5. Disable test mode (simulates Tuesday)
6. **Expected:** Promotional items should be automatically removed from cart

### Test 4: Cleanup on Page Load (Non-Monday)

1. Enable test mode
2. Add pizza + promo drink + free cookie
3. Close browser
4. Disable test mode
5. Reopen browser and navigate to site
6. **Expected:** Cart should NOT contain promotional items

### Test 5: Verify Promo Drinks Work

1. Enable test mode
2. Add 2 pizzas to cart
3. Open cart drawer
4. Add 1 promotional drink ($89)
5. **Expected:** Free cookie section unlocks
6. Add free cookie
7. Add another drink
8. **Expected:** Another cookie can be claimed
9. Try to add 3rd drink
10. **Expected:** Should NOT be allowed (only 2 pizzas = 2 drink limit)

---

## Promotion Rules

| Condition | Required |
|-----------|----------|
| Day | Monday only |
| Time | 1:00 PM - 10:00 PM (Mazatlán time) |
| Requirement | At least 1 pizza in cart |
| Drink price | $89 MXN (non-Rooky beverages) |
| Cookie | FREE with drink purchase |

### Promotion Flow

```
Pizza in cart → Can add $89 drink → Can claim FREE cookie
     ↓                 ↓                    ↓
  1 pizza    →    1 drink max    →    1 cookie max
  2 pizzas   →    2 drinks max   →    2 cookies max
  n pizzas   →    n drinks max   →    n cookies max
```

---

## Files Involved

| File | Purpose |
|------|---------|
| `lib/promotions.ts` | Core promotion logic, test mode functions |
| `components/cart/CartDrawer.tsx` | Promotion UI, auto-cleanup logic |
| `contexts/CartContext.tsx` | Cart state, localStorage cleanup on load |
| `components/PromoDevTools.tsx` | Dev tools panel for testing |

---

## API Reference

### `isMondayPromoActive(): boolean`

Returns `true` if:
- Test mode is enabled, OR
- It's Monday AND between 1 PM - 10 PM (Mazatlán time)

### `getMondayPromoStatus(): object`

Returns detailed status:
```typescript
{
  isActive: boolean;       // Final result (test mode OR real Monday)
  isMonday: boolean;       // Is it actually Monday?
  isDuringBusinessHours: boolean;  // Is it 1-10 PM?
  currentDay: string;      // e.g., "Tuesday"
  currentHour: number;     // e.g., 14 (2 PM)
  isTestMode: boolean;     // Is test mode enabled?
}
```

### `enableTestMode(): void`

Enables test mode via localStorage.

### `disableTestMode(): void`

Disables test mode, removes from localStorage.

---

## Troubleshooting

### Promo not showing?

1. Check if test mode is enabled:
   ```javascript
   console.log(localStorage.getItem('testMondayPromo'));
   ```
2. Check URL for `?testMonday=true`
3. Ensure you have at least 1 pizza in cart

### Promo items not being removed?

1. The cleanup runs every 60 seconds
2. Force refresh: `Ctrl+Shift+R` or `Cmd+Shift+R`
3. Clear localStorage: `localStorage.clear()`

### Dev tools not showing?

1. Only shows in development mode by default
2. In production, add `?showDevTools=true` to URL
3. Or run: `localStorage.setItem('showPromoDevTools', 'true')`

---

## Production Notes

- Test mode is disabled by default in production
- The `?testMonday=true` URL parameter works in production (for testing only)
- Remove the `PromoDevTools` component before final production deploy if desired
- The timezone is hardcoded to `America/Mazatlan`

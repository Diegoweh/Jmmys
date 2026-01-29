/**
 * Pizza Promotion Logic Tests
 *
 * Rules:
 * - 1 pizza = 1 promotion (1 drink at $89 + 1 free cookie)
 * - Customer must add drink before getting free cookie
 * - Can select same drink/cookie multiple times
 * - Rooky drinks excluded from promotion
 */

import { MenuItem, menuByCategory } from '@/lib/menu';

interface CartItem extends MenuItem {
  quantity: number;
}

// Replicate the promotion logic from CartDrawer
function calculatePizzaPromotion(items: CartItem[]) {
  const totalPizzas = items
    .filter(item => item.category === 'PIZZAS')
    .reduce((sum, item) => sum + item.quantity, 0);

  if (totalPizzas === 0) {
    return {
      available: false,
      totalPizzas: 0,
      drinksAdded: 0,
      cookiesAdded: 0,
      remainingPromotions: 0,
      canClaimDrink: false,
      canClaimCookie: false
    };
  }

  const drinkIds = menuByCategory['POSTRES']
    ?.filter(item =>
      item.price === 89 &&
      !item.name.includes('Coolkie') &&
      !item.id.toLowerCase().includes('rooky')
    )
    .map(item => item.id) || [];

  const freeCookieIds = [
    'postre-coolkie-duo',
    'postre-coolkie-chispas',
    'postre-coolkie-nuez-chocolate',
  ];

  const drinksAdded = items
    .filter(item => drinkIds.includes(item.id))
    .reduce((sum, item) => sum + item.quantity, 0);

  const promoCookieIds = freeCookieIds.map(id => `${id}-promo`);
  const cookiesAdded = items
    .filter(item => promoCookieIds.includes(item.id) && item.price === 0)
    .reduce((sum, item) => sum + item.quantity, 0);

  return {
    available: true,
    totalPizzas,
    drinksAdded,
    cookiesAdded,
    remainingPromotions: totalPizzas - drinksAdded,
    canClaimDrink: drinksAdded < totalPizzas,
    canClaimCookie: drinksAdded > cookiesAdded,
  };
}

describe('Pizza Promotion Logic', () => {
  const mockPizza: CartItem = {
    id: 'pizza-pepperonisima',
    category: 'PIZZAS',
    name: 'La Pepperonísima',
    description: 'Machin Pepperoni',
    price: 199,
    currency: 'MXN',
    imageUrl: '/img/pizzas/pepperonisima.webp',
    quantity: 1,
  };

  const mockDrink: CartItem = {
    id: 'bebida-honey-limonada',
    category: 'POSTRES',
    name: 'Honey Limonada',
    description: 'Limonada con miel',
    price: 89,
    currency: 'MXN',
    imageUrl: '/img/bebidas/juzzy-honey-limonada.webp',
    quantity: 1,
  };

  const mockCookie: CartItem = {
    id: 'postre-coolkie-duo-promo',
    category: 'POSTRES',
    name: 'Coolkie Duo (Promo Pizza)',
    description: 'Galleta mitad chocolate, mitad vainilla.',
    price: 0,
    currency: 'MXN',
    imageUrl: '/img/postres/galleta1.webp',
    quantity: 1,
  };

  describe('Test Case 1: Single Pizza Promotion', () => {
    test('1 pizza with no drinks should allow claiming 1 drink', () => {
      const cart = [mockPizza];
      const result = calculatePizzaPromotion(cart);

      expect(result.available).toBe(true);
      expect(result.totalPizzas).toBe(1);
      expect(result.drinksAdded).toBe(0);
      expect(result.cookiesAdded).toBe(0);
      expect(result.canClaimDrink).toBe(true);
      expect(result.canClaimCookie).toBe(false);
    });

    test('1 pizza + 1 drink should allow claiming 1 cookie', () => {
      const cart = [mockPizza, mockDrink];
      const result = calculatePizzaPromotion(cart);

      expect(result.available).toBe(true);
      expect(result.totalPizzas).toBe(1);
      expect(result.drinksAdded).toBe(1);
      expect(result.cookiesAdded).toBe(0);
      expect(result.canClaimDrink).toBe(false);
      expect(result.canClaimCookie).toBe(true);
    });

    test('1 pizza + 1 drink + 1 cookie should complete promotion', () => {
      const cart = [mockPizza, mockDrink, mockCookie];
      const result = calculatePizzaPromotion(cart);

      expect(result.available).toBe(true);
      expect(result.totalPizzas).toBe(1);
      expect(result.drinksAdded).toBe(1);
      expect(result.cookiesAdded).toBe(1);
      expect(result.canClaimDrink).toBe(false);
      expect(result.canClaimCookie).toBe(false);
    });
  });

  describe('Test Case 2: Multiple Pizza Promotions', () => {
    test('2 pizzas should allow 2 promotions', () => {
      const cart = [{ ...mockPizza, quantity: 2 }];
      const result = calculatePizzaPromotion(cart);

      expect(result.totalPizzas).toBe(2);
      expect(result.canClaimDrink).toBe(true);
      expect(result.remainingPromotions).toBe(2);
    });

    test('2 pizzas + 1 drink should allow 1 cookie', () => {
      const cart = [
        { ...mockPizza, quantity: 2 },
        mockDrink
      ];
      const result = calculatePizzaPromotion(cart);

      expect(result.totalPizzas).toBe(2);
      expect(result.drinksAdded).toBe(1);
      expect(result.cookiesAdded).toBe(0);
      expect(result.canClaimDrink).toBe(true); // Still can claim 1 more drink
      expect(result.canClaimCookie).toBe(true); // Can claim 1 cookie
      expect(result.remainingPromotions).toBe(1);
    });

    test('2 pizzas + 1 drink + 1 cookie should allow 1 more drink', () => {
      const cart = [
        { ...mockPizza, quantity: 2 },
        mockDrink,
        mockCookie
      ];
      const result = calculatePizzaPromotion(cart);

      expect(result.totalPizzas).toBe(2);
      expect(result.drinksAdded).toBe(1);
      expect(result.cookiesAdded).toBe(1);
      expect(result.canClaimDrink).toBe(true); // Can claim 2nd drink
      expect(result.canClaimCookie).toBe(false); // Already balanced
    });

    test('2 pizzas + 2 drinks + 1 cookie should allow 1 more cookie', () => {
      const cart = [
        { ...mockPizza, quantity: 2 },
        { ...mockDrink, quantity: 2 },
        mockCookie
      ];
      const result = calculatePizzaPromotion(cart);

      expect(result.totalPizzas).toBe(2);
      expect(result.drinksAdded).toBe(2);
      expect(result.cookiesAdded).toBe(1);
      expect(result.canClaimDrink).toBe(false); // All drinks claimed
      expect(result.canClaimCookie).toBe(true); // Can claim 2nd cookie
    });

    test('2 pizzas + 2 drinks + 2 cookies should complete all promotions', () => {
      const cart = [
        { ...mockPizza, quantity: 2 },
        { ...mockDrink, quantity: 2 },
        { ...mockCookie, quantity: 2 }
      ];
      const result = calculatePizzaPromotion(cart);

      expect(result.totalPizzas).toBe(2);
      expect(result.drinksAdded).toBe(2);
      expect(result.cookiesAdded).toBe(2);
      expect(result.canClaimDrink).toBe(false);
      expect(result.canClaimCookie).toBe(false);
      expect(result.remainingPromotions).toBe(0);
    });
  });

  describe('Test Case 3: Same Item Multiple Times', () => {
    test('Can add same drink multiple times', () => {
      const cart = [
        { ...mockPizza, quantity: 2 },
        { ...mockDrink, quantity: 2 }
      ];
      const result = calculatePizzaPromotion(cart);

      expect(result.drinksAdded).toBe(2);
      expect(result.canClaimCookie).toBe(true);
    });

    test('Can add same cookie multiple times', () => {
      const cart = [
        { ...mockPizza, quantity: 2 },
        { ...mockDrink, quantity: 2 },
        { ...mockCookie, quantity: 2 }
      ];
      const result = calculatePizzaPromotion(cart);

      expect(result.cookiesAdded).toBe(2);
      expect(result.canClaimCookie).toBe(false);
    });
  });

  describe('Test Case 4: Quantity Controls', () => {
    test('Should not allow increasing promotional drink quantity beyond limit', () => {
      // 2 pizzas, already have 2 drinks (limit reached)
      const cart = [
        { ...mockPizza, quantity: 2 },
        { ...mockDrink, quantity: 2 }
      ];
      const result = calculatePizzaPromotion(cart);

      expect(result.canClaimDrink).toBe(false);
      expect(result.drinksAdded).toBe(2);
      expect(result.totalPizzas).toBe(2);
    });

    test('Should not allow increasing promotional cookie quantity without drinks', () => {
      const cart = [mockPizza];
      const result = calculatePizzaPromotion(cart);

      expect(result.canClaimCookie).toBe(false);
      expect(result.cookiesAdded).toBe(0);
      expect(result.drinksAdded).toBe(0);
    });

    test('Should not allow increasing cookie quantity beyond drink quantity', () => {
      // 2 pizzas, 2 drinks, 2 cookies (all balanced)
      const cart = [
        { ...mockPizza, quantity: 2 },
        { ...mockDrink, quantity: 2 },
        { ...mockCookie, quantity: 2 }
      ];
      const result = calculatePizzaPromotion(cart);

      expect(result.canClaimCookie).toBe(false);
      expect(result.cookiesAdded).toBe(2);
      expect(result.drinksAdded).toBe(2);
    });

    test('Non-promotional items should not be restricted', () => {
      const regularItem: CartItem = {
        id: 'burger-original-cheeseburger',
        category: 'BURGERS',
        name: 'La Original Cheeseburger',
        description: '100% Top Sirloin',
        price: 99,
        currency: 'MXN',
        imageUrl: '/img/burgers/original-cheeseburger.webp',
        quantity: 5,
      };

      const cart = [mockPizza, regularItem];
      const result = calculatePizzaPromotion(cart);

      // Regular items don't affect promotion logic
      expect(result.totalPizzas).toBe(1);
      expect(result.canClaimDrink).toBe(true);
    });
  });

  describe('Test Case 5: Edge Cases', () => {
    test('No pizzas in cart', () => {
      const cart = [mockDrink];
      const result = calculatePizzaPromotion(cart);

      expect(result.available).toBe(false);
      expect(result.canClaimDrink).toBe(false);
      expect(result.canClaimCookie).toBe(false);
    });

    test('Empty cart', () => {
      const cart: CartItem[] = [];
      const result = calculatePizzaPromotion(cart);

      expect(result.available).toBe(false);
    });

    test('Rooky drinks should not count as promotional drinks', () => {
      const rookyDrink: CartItem = {
        id: 'bebida-rooky-fresas',
        category: 'POSTRES',
        name: 'Rooky Fresas',
        description: 'Café helado con fresas',
        price: 89,
        currency: 'MXN',
        imageUrl: '/img/bebidas/rocky-fresas.webp',
        quantity: 1,
      };

      const cart = [mockPizza, rookyDrink];
      const result = calculatePizzaPromotion(cart);

      expect(result.drinksAdded).toBe(0); // Rooky should not count
      expect(result.canClaimDrink).toBe(true); // Still need to add valid drink
    });

    test('Regular priced cookie should not count as promo cookie', () => {
      const regularCookie: CartItem = {
        id: 'postre-coolkie-duo', // Without -promo suffix
        category: 'POSTRES',
        name: 'Coolkie Duo',
        description: 'Galleta mitad chocolate, mitad vainilla.',
        price: 55, // Regular price, not $0
        currency: 'MXN',
        imageUrl: '/img/postres/galleta1.webp',
        quantity: 1,
      };

      const cart = [mockPizza, mockDrink, regularCookie];
      const result = calculatePizzaPromotion(cart);

      expect(result.cookiesAdded).toBe(0); // Regular cookie shouldn't count
      expect(result.canClaimCookie).toBe(true); // Should still be able to claim promo cookie
    });
  });
});

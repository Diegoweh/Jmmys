import { Mail, MapPin, Phone, Instagram, Facebook, Music, ExternalLink } from "lucide-react"
import { RiTiktokLine } from "react-icons/ri";

// Constantes para mejor mantenibilidad
const CONTACT_INFO = {
  phone: "+526692139090",
  phoneDisplay: "6692 139 090",
  instagram: "@jimmysmzt",
  instagramUrl: "https://instagram.com/jimmysmzt",
  facebook: "Jimmy's Mazatlán",
  facebookUrl: "https://facebook.com/jimmysmzt",
  tiktok: "@jimmysmzt",
  tiktokUrl: "https://tiktok.com/@jimmysmzt",
  address: {
    street: "Av. Carlos Canseco 603",
    neighborhood: "Fco. Villa",
    postalCode: "82127",
    city: "Mazatlán, Sinaloa, México"
  }
}

const CHECKERS_COUNT = 40 // Reducido para mejor rendimiento

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-sky-300 to-sky-400 pt-16 pb-8">
      {/* Main content con mejor espaciado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Layout para móvil y tablet */}
        <div className="lg:hidden space-y-8 mb-12">
          {/* Logo y descripción */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 mb-4">
              <img
                src="/img/cafe.png"
                alt="Jimmy's Café"
                className="w-30 h-30 drop-shadow-xl transform transition-transform hover:scale-110 hover:rotate-6"
                loading="lazy"
                width="80"
                height="80"
              />
              <div>
                <h3 className="text-3xl font-bold text-orange cubano">
                  JIMMYS
                </h3>
                <p className="text-orange font-medium">
                  Tu próxima obsesión
                </p>
              </div>
            </div>
            <p className="text-gray-700 max-w-md mx-auto">
              Las mejores pizzas artesanales de Mazatlán. Ingredientes frescos,
              sabores únicos y una experiencia inolvidable.
            </p>
          </div>

          {/* QR Code */}
          {/* <div className="flex flex-col sm:flex-row items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-orange-400 to-orange-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white p-2 rounded-xl border-2 border-orange-200">
                <img
                  src="/QrWeb.jpg"
                  alt="QR Menú Digital"
                  className="w-24 h-24 object-contain"
                  loading="lazy"
                  width="96"
                  height="96"
                />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-lg text-orange mb-1">
                Escanea y ordena
              </h4>
              <p className="text-sm text-gray-600">
                Accede a nuestro menú digital completo<br />
                y haz tu pedido desde tu celular
              </p>
            </div>
          </div> */}

          {/* Contacto */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-orange cubano">CONTACTO</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Teléfono */}
              <div className="flex items-center gap-3 text-white">
                <div className="group/icon inline-flex p-2.5 bg-orange rounded-xl transition shadow-sm hover:bg-orange-50 hover:text-orange-600">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide">Delivery</p>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="font-bold text-lg text-orange-600 hover:text-orange-700 transition-colors"
                    aria-label={`Llamar para delivery al ${CONTACT_INFO.phoneDisplay}`}
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-3 text-white">
                <div className="group/icon inline-flex p-2.5 bg-orange rounded-xl transition shadow-sm hover:bg-orange-50 hover:text-orange-600">
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide">Instagram</p>
                  <a
                    href={CONTACT_INFO.instagramUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-bold text-lg text-orange-600 hover:text-orange-700 transition-colors inline-flex items-center gap-1"
                    aria-label={`Visitar Instagram ${CONTACT_INFO.instagram}`}
                  >
                    {CONTACT_INFO.instagram}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-center gap-3 text-white">
                <div className="group/icon inline-flex p-2.5 bg-orange rounded-xl transition shadow-sm hover:bg-orange-50 hover:text-orange-600">
                  <Facebook className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide">Facebook</p>
                  <a
                    href={CONTACT_INFO.facebookUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-bold text-lg text-orange-600 hover:text-orange-700 transition-colors inline-flex items-center gap-1"
                    aria-label={`Visitar Facebook ${CONTACT_INFO.facebook}`}
                  >
                    {CONTACT_INFO.facebook}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* TikTok */}
              <div className="flex items-center gap-3 text-white">
                <div className="group/icon inline-flex p-2.5 bg-orange rounded-xl transition shadow-sm hover:bg-orange-50 hover:text-orange-600">
                  <RiTiktokLine className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide">TikTok</p>
                  <a
                    href={CONTACT_INFO.tiktokUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-bold text-lg text-orange-600 hover:text-orange-700 transition-colors inline-flex items-center gap-1"
                    aria-label={`Visitar TikTok ${CONTACT_INFO.tiktok}`}
                  >
                    {CONTACT_INFO.tiktok}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Ubicación */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-orange-700 cubano">UBICACIÓN</h4>
            <address className="not-italic">
              <div className="flex items-start gap-3 text-white">
                <div className="group/icon inline-flex p-2.5 bg-orange rounded-xl transition shadow-sm hover:bg-orange-50 hover:text-orange-600">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">Visítanos</p>
                  <p className="text-sm leading-relaxed font-medium text-gray-700">
                    <span className="font-bold text-orange-700">
                      {CONTACT_INFO.address.street}
                    </span>
                    <br />
                    {CONTACT_INFO.address.neighborhood}
                    <br />
                    {CONTACT_INFO.address.city}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      `${CONTACT_INFO.address.street} ${CONTACT_INFO.address.neighborhood} ${CONTACT_INFO.address.city}`
                    )}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 mt-3 text-sm text-orange-600 hover:text-orange-700 font-semibold underline underline-offset-2"
                  >
                    Ver en Google Maps
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <img src="/img/delivery.png" alt="delivery" className="py-12 w-full max-w-md mx-auto" />
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Layout para DESKTOP - Grid de 4 columnas */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 xl:gap-12 mb-12">

          {/* Columna 1: Logo + Descripción */}
          <div className="space-y-6">
            <div className="flex flex-col items-start">
              <img
                src="/img/cafe.png"
                alt="Jimmys Café"
                className="w-24 h-24 drop-shadow-xl transform transition-transform hover:scale-110 hover:rotate-6 mb-4"
                loading="lazy"
                width="96"
                height="96"
              />
              <h3 className="text-3xl xl:text-4xl font-bold text-orange-700 cubano">
                JIMMYS
              </h3>
              <p className="text-orange-600 font-medium text-lg">
                Tu próxima obsesión
              </p>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Las mejores pizzas artesanales de Mazatlán. Ingredientes frescos,
              sabores únicos y una experiencia inolvidable.
            </p>
          </div>

          {/* Columna 2: QR Code */}
          {/* <div className="flex items-start justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-orange-400 to-orange-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white p-4 rounded-2xl border-2 border-orange-200 shadow-lg">
                <img
                  src="/QrWeb.jpg"
                  alt="QR Menú Digital"
                  className="w-32 h-32 object-contain"
                  loading="lazy"
                  width="128"
                  height="128"
                />
                <p className="mt-3 text-center font-bold text-orange-700 text-sm">
                  Escanea y ordena
                </p>
              </div>
            </div>
          </div> */}

          {/* Columna 3: Contacto */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-orange-700 cubano">
              CONTACTO
            </h4>

            {/* Teléfono */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-white">
                <div className="group/icon inline-flex p-2.5 bg-orange rounded-xl transition shadow-sm hover:bg-orange-50 hover:text-orange-600">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide">Delivery</p>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="font-bold text-lg text-orange-600 hover:text-orange-700 transition-colors block"
                    aria-label={`Llamar para delivery al ${CONTACT_INFO.phoneDisplay}`}
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-white">
                <div className="group/icon inline-flex p-2.5 bg-orange rounded-xl transition shadow-sm hover:bg-orange-50 hover:text-orange-600">
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide">Instagram</p>
                  <a
                    href={CONTACT_INFO.instagramUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-bold text-lg text-orange-600 hover:text-orange-700 transition-colors inline-flex items-center gap-1"
                    aria-label={`Visitar Instagram ${CONTACT_INFO.instagram}`}
                  >
                    {CONTACT_INFO.instagram}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Facebook */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-white">
                <div className="group/icon inline-flex p-2.5 bg-orange rounded-xl transition shadow-sm hover:bg-orange-50 hover:text-orange-600">
                  <Facebook className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide">Facebook</p>
                  <a
                    href={CONTACT_INFO.facebookUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-bold text-lg text-orange-600 hover:text-orange-700 transition-colors inline-flex items-center gap-1"
                    aria-label={`Visitar Facebook ${CONTACT_INFO.facebook}`}
                  >
                    {CONTACT_INFO.facebook}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* TikTok */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-white">
                <div className="group/icon inline-flex p-2.5 bg-orange rounded-xl transition shadow-sm hover:bg-orange-50 hover:text-orange-600">
                  <RiTiktokLine className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide">TikTok</p>
                  <a
                    href={CONTACT_INFO.tiktokUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-bold text-lg text-orange-600 hover:text-orange-700 transition-colors inline-flex items-center gap-1"
                    aria-label={`Visitar TikTok ${CONTACT_INFO.tiktok}`}
                  >
                    {CONTACT_INFO.tiktok}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 4: Ubicación */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-orange-700 cubano">
              UBICACIÓN
            </h4>

            <address className="not-italic">
              <div className="flex items-start gap-3 text-white">
                <div className="group/icon inline-flex p-2.5 bg-orange rounded-xl transition shadow-sm hover:bg-orange-50 hover:text-orange-600 shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">Visítanos</p>
                  <p className="text-sm leading-relaxed font-medium text-gray-700">
                    <span className="font-bold text-orange-700">
                      {CONTACT_INFO.address.street}
                    </span>
                    <br />
                    {CONTACT_INFO.address.neighborhood}
                    <br />
                    {CONTACT_INFO.address.city}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      `${CONTACT_INFO.address.street} ${CONTACT_INFO.address.neighborhood} ${CONTACT_INFO.address.city}`
                    )}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 mt-3 text-sm text-orange-600 hover:text-orange-700 font-semibold underline underline-offset-2"
                  >
                    Ver en Maps
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <img src="/img/delivery.png" alt="delivery" className="py-12" />
                </div>
              </div>
            </address>
          </div>

        </div>

        {/* Divider mejorado */}
        <div className="mt-10 mb-6">
          <div className="h-px bg-linear-to-r from-transparent via-orange-300 to-transparent" />
        </div>

        {/* Legal y copyright */}
        <div className="text-center space-y-2">
          <p className="text-gray-700 text-sm">
            © {new Date().getFullYear()} Jimmys • Todos los derechos reservados
          </p>
          <nav aria-label="Enlaces legales">
            <ul className="flex justify-center gap-4 text-sm">
              <li>
                <a
                  href="/aviso-de-privacidad"
                  className="text-orange-600 hover:text-orange-700 underline underline-offset-2 hover:no-underline transition-colors"
                >
                  Aviso de privacidad
                </a>
              </li>
              <li className="text-gray-400">•</li>
              <li>
                <a
                  href="/terminos-y-condiciones"
                  className="text-orange-600 hover:text-orange-700 underline underline-offset-2 hover:no-underline transition-colors"
                >
                  Términos y condiciones
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
    </footer>
  )
}
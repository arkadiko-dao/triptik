import ProductTag from "./ProductTag";

export default function Product({name, background, decoration, basis, shadow, order, iconPath, titleTop, titleBottom, subtitleTop, subtitleBottom, buttonTextColor, buttonBorderColor}) {
  return (
    <section className={`group/root lg:min-h-[calc(100vh-72px)] pt-24 overflow-hidden relative h-full ${background} ${basis} ${shadow} ${order}`}>
      <div className="absolute inset-0 w-full h-full transition duration-[5000ms] bg-cover top-16 group-hover/root:scale-110" style={{backgroundImage: `url(${decoration})`}}>
      </div>

      <div className="relative mx-auto text-center lg:px-6 min-h-[calc(100vh-72px-12rem)]">
        <header className="lg:mt-[8vh]">
          <svg className="w-10 h-10 mx-auto mb-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {iconPath}
          </svg>

          <ProductTag product={name}>
            {name}
          </ProductTag>
        </header>

        <div className="mt-8">
          {name === "Core product" ? (
            <>
              <h2 className="text-5xl font-headings">Self-repaying loans</h2>

              <div className="flex inline-flex items-center gap-4 px-5 py-3 mx-auto mt-8 border rounded-sm shadow-inner border-white/20 bg-white/20 shadow-white/5">
                <div className="flex items-center gap-2 mx-auto">
                  <div className="bg-[linear-gradient(135deg,#5546ff,rgba(122,64,238,0))] border border-white/40 w-8 h-8 rounded-full flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.2157 13.4L9.49991 9.28531H13.3999V7.73291H0.600098V9.28711H4.49885L1.78437 13.4H3.80952L7.00003 8.56587L10.1905 13.4H12.2157ZM13.4 6.22624V4.65821H9.57915L12.2576 0.599976H10.2324L7 5.49751L3.76761 0.599976H1.74247L4.42434 4.66185H0.600098V6.22624H13.4Z" fill="white"/></svg></div>
                  <p className="text-lg font-medium text-gray-800">Deposit <strong>STX</strong></p>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillOpacity="0.5"fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>

                <div className="flex items-center gap-2 mx-auto">
                  <div className="w-8 h-8 border border-white/40 rounded-full flex items-center justify-center bg-[#3C4748]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="none"><path fill="#fff" d="m2.1 5.73 4.71-2.75c.13.054.272.084.42.084.616 0 1.12-.509 1.12-1.132C8.35 1.309 7.845.8 7.23.8c-.617 0-1.116.505-1.12 1.127l-4.864 2.84A1.317 1.317 0 0 0 .6 5.901v6.046c0 .466.248.9.648 1.134l5.477 3.198a.483.483 0 0 0 .496 0 .5.5 0 0 0 .248-.436v-.162a.747.747 0 0 0-.367-.642L2.1 12.119a.51.51 0 0 1-.25-.438V6.167c0-.179.097-.348.25-.437Zm4.458-4.063a.721.721 0 0 1 .911-.423c.283.1.484.371.484.69a.729.729 0 0 1-.722.73.727.727 0 0 1-.673-.997ZM15.139 5.114l-5.48-3.2a.496.496 0 0 0-.504 0 .506.506 0 0 0-.251.441v.225c0 .22.117.423.305.533l5.075 2.962c.149.086.24.246.24.418v5.538a.483.483 0 0 1-.24.418l-4.588 2.613a1.1 1.1 0 0 0-.51-.126c-.616 0-1.12.509-1.12 1.132 0 .623.504 1.132 1.12 1.132.56 0 1.025-.416 1.108-.96l4.847-2.83a1.29 1.29 0 0 0 .635-1.112V6.227a1.294 1.294 0 0 0-.637-1.113ZM9.686 16.596a.713.713 0 0 1-.502.203h-.022a.727.727 0 0 1-.7-.73.727.727 0 0 1 .834-.722.729.729 0 0 1 .612.723.725.725 0 0 1-.222.526Z"/><path fill="#fff" d="M7.651 4.6h.905v1.123c.208.028.427.076.655.146.23.07.455.166.676.291l-.374.998a3.127 3.127 0 0 0-.676-.27 2.518 2.518 0 0 0-.738-.114c-.25 0-.458.055-.624.166a.512.512 0 0 0-.24.458c0 .194.07.346.208.457.14.104.375.212.708.323l.478.156c.527.173.93.416 1.206.728.278.305.416.69.416 1.154 0 .229-.041.447-.124.655a1.523 1.523 0 0 1-.354.541 1.97 1.97 0 0 1-.572.406 2.869 2.869 0 0 1-.8.218v1.186h-.906v-1.165a3.853 3.853 0 0 1-.894-.177 3.578 3.578 0 0 1-.77-.374l.468-.988a2.727 2.727 0 0 0 1.518.478c.354 0 .608-.062.76-.187a.62.62 0 0 0 .24-.5c0-.18-.067-.329-.198-.447-.132-.124-.364-.242-.697-.353l-.52-.167a3.578 3.578 0 0 1-.624-.26 2.398 2.398 0 0 1-.51-.384 1.645 1.645 0 0 1-.343-.5 1.676 1.676 0 0 1-.125-.665c0-.257.045-.492.135-.707a1.72 1.72 0 0 1 .968-.936 2.19 2.19 0 0 1 .748-.167V4.6Z"/></svg>
                  </div>
                  <p className="text-lg font-medium text-gray-800">Mint <strong>USDA</strong></p>
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-headings"><span className="text-xl">{titleTop}</span> <br/>{titleBottom}</h2>
              <p className="mt-8 font-medium text-gray-800">{subtitleTop}<br/> {subtitleBottom}</p>
            </>
          )}
        </div>
        <footer className="text-center lg:absolute lg:bottom-[5rem] lg:transform lg:left-1/2 lg:-translate-x-1/2 my-8 lg:my-0">
          <a href="#" className={`${buttonTextColor} ${buttonBorderColor} border bg-[#180B26] rounded text-sm xl:text-lg px-4 xl:px-6 py-3 inline-flex items-center gap-x-2 transition duration-500 group/cta`}>
            Launch app
            <svg className="group-hover/cta:translate-x-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 10C3 9.8011 3.07902 9.61033 3.21967 9.46968C3.36032 9.32903 3.55109 9.25001 3.75 9.25001H14.388L10.23 5.29001C10.1557 5.22257 10.0956 5.1409 10.0534 5.04983C10.0112 4.95875 9.98771 4.86014 9.98432 4.75982C9.98093 4.65951 9.99771 4.55953 10.0337 4.46582C10.0696 4.37211 10.124 4.28657 10.1937 4.21427C10.2633 4.14196 10.3467 4.08437 10.439 4.04491C10.5313 4.00544 10.6306 3.9849 10.7309 3.9845C10.8313 3.98411 10.9307 4.00386 11.0233 4.0426C11.1159 4.08133 11.1998 4.13826 11.27 4.21001L16.77 9.46001C16.8426 9.52997 16.9003 9.61385 16.9398 9.70663C16.9792 9.79941 16.9995 9.89919 16.9995 10C16.9995 10.1008 16.9792 10.2006 16.9398 10.2934C16.9003 10.3862 16.8426 10.47 16.77 10.54L11.27 15.79C11.1998 15.8618 11.1159 15.9187 11.0233 15.9574C10.9307 15.9962 10.8313 16.0159 10.7309 16.0155C10.6306 16.0151 10.5313 15.9946 10.439 15.9551C10.3467 15.9156 10.2633 15.8581 10.1937 15.7857C10.124 15.7134 10.0696 15.6279 10.0337 15.5342C9.99771 15.4405 9.98093 15.3405 9.98432 15.2402C9.98771 15.1399 10.0112 15.0413 10.0534 14.9502C10.0956 14.8591 10.1557 14.7774 10.23 14.71L14.388 10.75H3.75C3.55109 10.75 3.36032 10.671 3.21967 10.5303C3.07902 10.3897 3 10.1989 3 10Z" fill="currentColor"/>
            </svg>
          </a>
          <p className="mt-3"><a href="#" className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-white/80 py-1 px-3 bg-neutral-900/70 border-neutral-200/20 border rounded-sm text-center text-xs  hover:text-white hover:bg-neutral-900/90 transition duration-600">Learn more</a></p>
        </footer>
      </div>
    </section>
  )
}

import Navii from "./assets/component/Navii"
import Anasayfa from "./assets/component/Anasayfa"
import Blog from "./assets/component/Blog"
import Galeri from "./assets/component/Galeri"
import Hakkimda from "./assets/component/Hakkimda"
import Iletisim from "./assets/component/Iletisim"
import "./assets/style/app.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Content from "./assets/component/Content"
import Loading from "./assets/component/Loading"

function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path="/*" element={<Loading />} />{/*burada yıldız kullam sebebimiz / dan sonra ne yazılırsa yazılsın yazılmamış gibi kabul edip direkt yönlendiriyor. */}
        <Route path="sonay" element={<Navii />}>
          <Route path="anasayfa" element={<Anasayfa />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:blogID" element={<Content />} />
          <Route path="galeri" element={<Galeri />} />
          <Route path="hakkimda" element={<Hakkimda />} />
          <Route path="iletisim" element={<Iletisim />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

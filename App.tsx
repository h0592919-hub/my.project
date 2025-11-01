import InfluentialFiguresPage from "./pages/InfluentialFigures/InfluentialFigures"
import GroundbreakingTechnologiesPage from "./pages/GroundbreakingTechnologies/GroundbreakingTechnologies"
import HomePage from "./pages/Home/Home"
import SinglePostTemplatePage from "./templates/SinglePostTemplate/SinglePostTemplate"
function App() {
 <Route path="/GroundbreakingTechnologiesPage" element={<GroundbreakingTechnologiesPage />} />
 <Route path="/" element={<HomePage />} />
 <Route path="/HomePage" element={<HomePage />} />
<Route path="/post/:post_id" element={<SinglePostTemplatePage />} />
 </Routes> 
 </div>
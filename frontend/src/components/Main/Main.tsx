import './Main.css'
import Filter from '../../images/Group 57.svg'
import VerticalLine from '../../images/Line 5.svg'
function Main() {
 return (
    <main id="main">
        <div id="filter">
            <div id='show-files'>
              <img id='filter-img' src={Filter} alt="" />
              <img id='vertical-line' src={VerticalLine} alt="" />
              <h1>showing 1-16 files of 32 results </h1>
              </div>

            <div id='filter-search'>
              <h1>Show</h1>
              <input type="text" />
            </div>
        </div>
    </main>
 )   
}

export default Main
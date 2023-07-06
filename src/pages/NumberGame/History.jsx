
import { useSelector } from 'react-redux';
import {selectorNumberGame} from '../../store/reducers/numberGame';

const History = () => {
    const { historyList } = useSelector(selectorNumberGame);
    const renderList = () => {
        if(historyList && historyList.length){
          return (<table>
            <tr>
              <th>Game no.</th>
              <th>Steps</th>
              <th>Time</th>
              <th>Win Date</th>
            </tr>
            {historyList && historyList.map((item, index) => {
              return ( <tr>
                <td>{index+1}</td>
                <td>{item.steps}</td>
                <td>{item.time}</td>
                <td>{item.date}</td>
              </tr>)
            })}
          </table>)
        }
        return ''
      }

    return (<div>History

        {renderList()}
    </div>)
}

export default History
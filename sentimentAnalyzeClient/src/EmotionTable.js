import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      return (  
        <div>
          {/*You can remove this line and the line below. */}
          <table className="table table-bordered">
            <tbody>
              { 
                Object.keys(this.props.emotions).map((key) => {
                    return (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{this.props.emotions[key]}</td>
                      </tr>
                    )
                  }
                )
              }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;

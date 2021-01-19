import React, { Component } from 'react';
// import XLSX from 'xlsx';
import FileSaver from 'file-saver';
import InputTester from './InputTester';
import data from './data.json';
const fs = require('fs');


class ToXlsx extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    gogo = async () => {
        let result = [];
        data.map((teacherData) => {
            const Res = {
                姓名: teacherData.name,
                pid: teacherData.pid,
                帳戶資訊: {
                    帳戶名稱: teacherData.bankAccount && teacherData.bankAccount.accountName,
                    帳戶照片: teacherData.bankAccount && teacherData.bankAccount.bankBookPhoto && teacherData.bankAccount.bankBookPhoto._id
                }
            }
            result.push(Res);
        })
        const blob = new Blob([JSON.stringify(result)], { type: "" });
        console.log('FileSaver', FileSaver.saveAs(blob));
        console.log('result', fs);
    }

    onSelect = async (e, cb) => {
        const files = [];
        const fileKeys = Object.keys(e.target.files);
        fileKeys.forEach((key) => {
          files.push({
            file: e.target.files[key],
          });
        });
        // cb(e, files);
        alert(files[0].file)
        e.target.value = null;
      };

    ImageChange = (e, fileData) => {
    this.setState({
      imageFile: fileData[0].file,
    });
  };

    render() {
        return (
            <div>
                <div className="input-image-block">
                    1
                    <InputTester className="input-image--disapear" multiple={false} onChange={this.ImageChange} />
                </div>
                <img src={this.state.imageFile} alt="" />
                <br />
                <br />
                <div className="input-image-block">
                    2
                    <input
                        className="input-image--disapear"
                        multiple={false}
                        type="file"
                        onChange={(e) => { alert(e.target.files) }}
                    />
                </div>
                <button onClick={this.gogo}>gogo</button>
                {
                    data.map(teacherData => {
                        console.log('teacherData', teacherData.bankAccount)
                        return (
                            <div key={teacherData.pid} style={{ border: '1px solid black', margin: '5px 0' }}>
                                <span>name: {teacherData.name}</span>
                                <span style={{ margin: '0 20px' }}>pid: {teacherData.pid}</span>
                                {   teacherData.bankAccount &&
                                    <div>
                                        帳戶：
                                        <span style={{ margin: '0 10px' }}>{teacherData.bankAccount.account}</span>
                                        <span style={{ margin: '0 10px' }}>{teacherData.bankAccount.accountName}</span>
                                        <span style={{ margin: '0 10px' }}>{teacherData.bankAccount.bank}</span>
                                        <span style={{ margin: '0 10px' }}>{teacherData.bankAccount.branch}</span>
                                        {teacherData.bankAccount.bankBookPhoto && <span style={{ margin: '0 20px', color: 'red' }}>{teacherData.bankAccount.bankBookPhoto._id}</span>}
                                    </div>
                                }
                            </div>
                        )})
                }
            </div>
        )
    }
}


export default ToXlsx;

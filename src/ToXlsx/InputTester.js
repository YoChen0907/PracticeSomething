import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';


const onSelect = async (e, cb) => {
  const files = [];
  const fileKeys = Object.keys(e.target.files);
  fileKeys.forEach((key) => {
    files.push({
      id: uuid.v4(),
      file: e.target.files[key],
    });
  });
  cb(e, files);
  e.target.value = null;
};

const InputTester = ({ accepts, multiple, onChange, ...props }) => {
  const acceptTypes = [];
  accepts.forEach((typeName) => {
    switch (typeName) {
      case 'pic':
        acceptTypes.push('.jpg,.jpeg,.png,.gif,.bmp');
        break;
      case 'doc':
        acceptTypes.push('.doc,.docx,.ppt,.pptx,.pdf');
        break;
      case 'video':
        acceptTypes.push('.mpeg,.avi,.wmv,.rm,.mp4,.mov,.mpg,.3gp,.mts');
        break;
      case 'sound':
        acceptTypes.push('.wav,.wma,.mp3');
        break;
      default:
        break;
    }
  });
//   const accept = acceptTypes.join(',');
  return (
    <input
      multiple={multiple}
      type="file"
      onChange={e => onSelect(e, onChange)}
      {...props}
    />
  );
};

InputTester.propTypes = {
  onChange: PropTypes.func,
  multiple: PropTypes.bool, // 是否可以選擇多個檔案
  accepts: PropTypes.arrayOf(PropTypes.string), // 接受的檔案類型
};

InputTester.defaultProps = {
  onChange: (e, files) => ({ e, files }),
  accepts: ['pic', 'doc', 'video', 'sound'],
  multiple: false,
  open: false,
};

export default InputTester;

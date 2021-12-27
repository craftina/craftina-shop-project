import './Marker.css';

const Marker = (props) => {
    const {name, id } = props;
    return (
      <div className="marker"
        style={{ cursor: 'pointer'}}
        title={name}
      />
    );
  };

  export default Marker;
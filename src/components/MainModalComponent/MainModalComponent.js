const MainModalComponent = ({ onSuccess, onCancel }) => {
  return (
    <div
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 100,
        top: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '300px',
          backgroundColor: 'gold',
          height: '200px',
          zIndex: 200,
        }}
      >
        <h3>Подвердите удаление</h3>
        <button
          onClick={() => {
            onSuccess()
          }}
        >
          ок
        </button>
        <button onClick={onCancel}>отмена</button>
      </div>
    </div>
  )
}
export default MainModalComponent

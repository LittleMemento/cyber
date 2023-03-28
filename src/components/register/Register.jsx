import "./Register.css";

function Register() {
  return (
    <div className="Register">
      <div className="register_border">
        <div className="register_block">
          <h3>Регистрация</h3>
          <div className="btn_block">
            <button className="btn fire">
              <b>Один игрок</b>
            </button>
            <button className="btn">
              <b>Команда</b>
            </button>
          </div>
          <form className="your_self">
            <div className="input_name input">
              <label htmlFor="name1">Имя</label>
              <input type="text" id="name1" />
            </div>
            <div className="input_time input">
              <label htmlFor="time1">Опыт</label>
              <div>
                <input type="number" id="time1" placeholder="От" />
                <input type="number" placeholder="До" />
              </div>
            </div>
            <div className="input_name1 input">
              <label htmlFor="name2">Фамилия</label>
              <input type="text" id="name2" />
            </div>
            <div className="input_direction input">
              <label htmlFor="direction">Направления</label>
              <input type="text" id="direction" />
            </div>
            <div className="input_email input">
              <label htmlFor="inputemail">Почта</label>
              <input type="email" id="inputemail" />
            </div>
            <div className="input_phone input">
              <label htmlFor="inputnumphone">Телефон</label>
              <input type="number" id="inputnumphone" />
            </div>
          </form>
          <button className="btn_otp">Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default Register;

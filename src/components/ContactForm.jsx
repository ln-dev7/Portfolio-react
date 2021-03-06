import React, { Component } from "react";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      firstname: "",
      phone: "",
      email: "",
      message: "",
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    let {name, firstname, phone, email, message} = this.state;
    let nameS = document.getElementById('name');
    let emailS = document.getElementById('email');
    let messageS = document.getElementById('message');
    let formMess = document.querySelector('.form-message');

    const isEmail = () => {
      let isMail = document.getElementById('not-mail')
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if(email.match(regex)) {
        isMail.style.display = 'none';
        return true;
      } else {
        isMail.style.display = 'block';
        isMail.style.animation = 'dongle 1s';
        setTimeout(() => {
          isMail.style.animation = 'none';
        }, 1000);
        return false;
      }
    }

    if (name && isEmail() && message){
      const templateId = "template_aofmtvBG";

      nameS.classList.remove('red');
      emailS.classList.remove('red');
      messageS.classList.remove('red');

      this.sendFeedback(templateId, {
        name,
        firstname,
        phone,
        email,
        message,
      });
    } else {
      formMess.innerHTML = "Merci de remplir correctement les champs requis *";
      formMess.style.background = 'rgb(253, 87, 87)';
      formMess.style.opacity = '1';

      function error(type, path){
        if (!type) {
          path.classList.add('error');
        }
      }
      error(name,nameS);
      error(email, emailS);
      error(message, messageS);
    }
  }

  sendFeedback(templateId, variables) {
    let formMess = document.querySelector('.form-message');

    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        formMess.innerHTML = "Message envoy?? ! Vous seriez r??pondu d'ici peu ...";
        formMess.style.background = '#00c1ec';
        formMess.style.opacity = '1';

        document.getElementById('name').classList.remove('error');
        document.getElementById('email').classList.remove('error');
        document.getElementById('message').classList.remove('error');

        this.setState({
          name: "",
          firstname: "",
          phone: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          formMess.style.opacity = '0';
        }, 5000);
      })
      .catch((err) =>
        formMess.innerHTML = "Une erreur s'est produite, veuillez r??essayer."
      );
  }

  render() {
    return (
      <form className="contact-form">
        <h2>contactez-moi</h2>
        <div className="form-content">
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={this.handleChange.bind(this)}
            placeholder="nom *"
            value={this.state.name}
            autoComplete="off"
          />
          <input
            type="text"
            id="firstname"
            name="firstname"
            onChange={this.handleChange.bind(this)}
            placeholder="pr??nom"
            value={this.state.company}
          />
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={this.handleChange.bind(this)}
            placeholder="t??l??phone"
            value={this.state.phone}
          />
          <div className="email-content">
            <input
              type="mail"
              id="email"
              name="email"
              required
              onChange={this.handleChange.bind(this)}
              placeholder="email *"
              value={this.state.email}
              autoComplete="off"
            />
          </div>
          <textarea
            id="message"
            name="message"
            onChange={this.handleChange.bind(this)}
            placeholder="message *"
            required
            value={this.state.message}
          />
        </div>
        <input className="button" type="button" value="envoyer" onClick={this.handleSubmit.bind(this)} />
        <div className="form-message"></div>
      </form>
    );
  }
}
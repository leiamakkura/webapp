import React from 'react'
import { Link } from 'react-router-dom'

class Coach extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
    }
  }

  render() {

    var imageSize = {
      height: "50%",
      width: "60%",
      padding: "3%",
    };

    var bgColors = {
      "Blue": "rgba(31, 189, 230, 0.7)",
      "Green": "rgba(72, 179, 96, 0.7)",
      "Grey": "rgba(133, 140, 150, 0.7)",
      "Yellow": "rgba(255, 193, 6, 0.7)",
      "Red": "rgba(255, 102, 102, 0.7)",
    };

    return (
      <div className="Block card px-5 py-5">
        <div className="card-deck m-4">

          <div className="card border-info text-center">
            <Link to='/clientlist'>
              <div className="card-header" style={{ backgroundColor: bgColors.Blue }}>
                <img className="card-img-top rounded mx-auto d-block" src="ressources/customers.png" alt="Liste des clients" style={imageSize} />
              </div>
              <div className="card-body">
                <h5 className="card-title">Liste des clients</h5>
                <p className="card-text">Visualisez les sessions sportives de vos clients</p>
              </div>
            </Link>
          </div>

          <div className="card border-success text-center">
            <Link to='/createsession'>
              <div className="card-header" style={{ backgroundColor: bgColors.Green }}>
                <img className="card-img-top rounded mx-auto d-block" src="ressources/create.png" alt="Creer une seance" style={imageSize} />
              </div>
              <div className="card-body">
                <h5 className="card-title">Créer une séance</h5>
                <p className="card-text">Créez un nouveau programme sportif</p>
              </div>
            </Link>
          </div>

          <div className="card border-warning text-center">
            <Link to='/traininglist'>
              <div className="card-header" style={{ backgroundColor: bgColors.Yellow }}>
                <img className="card-img-top rounded mx-auto d-block" src="ressources/session.png" alt="Modifier une seance" style={imageSize} />
              </div>
              <div className="card-body">
                <h5 className="card-title">Modifier une séance</h5>
                <p className="card-text">Gérez les séances que vous avez déjà préparées</p>
              </div>
            </Link>
          </div>

        </div>

        <div className="card-deck m-4" style={{ paddingLeft: "16rem", paddingRight: "16rem" }}>
          <div className="card border-danger text-center">
            <Link to={`/profile`}>
              <div className="card-header" style={{ backgroundColor: bgColors.Red }}>
                <img className="card-img-top rounded mx-auto d-block" src="ressources/user.png" alt="Votre profil" style={imageSize} />
              </div>
              <div className="card-body">
                <h5 className="card-title">Votre profil</h5>
                <p className="card-text">Visualisez le profil que peuvent voir vos clients</p>
              </div>
            </Link>
          </div>

          <div className="card border-secondary text-center">
            <Link to='/account'>
              <div className="card-header" style={{ backgroundColor: bgColors.Grey }}>
                <img className="card-img-top rounded mx-auto d-block" src="ressources/settingsc.png" alt="Mon compte" style={imageSize} />
              </div>
              <div className="card-body">
                <h5 className="card-title">Mon compte</h5>
                <p className="card-text">Modifiez vos informations personnelles</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Coach;
import React from 'react'
import ProgressBar from '../ui/progressBar'
import ApiManager from '../ApiManager'

class Statistics extends React.Component {
    constructor(props) {
        super(props)
        this.calcProgress = this.calcProgress.bind(this)
        this.state = {
            activities: [],
            goalPercent: 0,
            goal: 0,
            sportTime: 0,
            loading: false
        }
    }

    componentWillMount() {
        ApiManager.getUser().then((data) => {
            this.setState({ goal: data.goal });
            ApiManager.getActivities().then((activities) => {
                this.setState({ activities: activities });
                this.calcProgress();
            })
        })
    }

    componentWillUnmount()  {
        this.setState({ goalPercent: 0 })
        this.setState({ sportTime: 0 })
    }

    calcProgress() {
        var sportTime = 0;
        this.state.activities.forEach(function (item) {
            sportTime += item.timeSpent;
        });
        if (sportTime > this.state.goal)
            this.setState({ goalPercent: 100 });
        else {
            var percent = Math.round((sportTime * 100) / this.state.goal * 100) / 100;
            !percent ? this.setState({ goalPercent: 0 }) : this.setState({ goalPercent: percent });
        }
        this.setState({ sportTime: sportTime });
        this.setState({ loading: true });
    }

    render() {
        if (!this.state.loading) { return null }
        return (
            <div id="StatsPage" className="card mb-4 p-sm-3">
                <h3>Vos statistiques</h3>< br />

                <table className="w-100">
                    <tbody>

                        <tr>
                            <td className="w-50">
                                <div className="statsblock center p-4 m-4" id="ObjectiveJauge">
                                    <div className="display-4 text-info">{this.state.sportTime}</div><br />
                                    <div className="statdescri">minutes d'effort cette semaine !</div>
                                </div>
                            </td>
                            <td className="w-50">

                                <div className="statsblock center p-4 m-4" id="ObjectiveJauge">
                                    <div className="display-4 text-info">{this.state.goal}</div>
                                    <span className="statdescri">objectif de la semaine</span>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <div className="statsblock p-4 m-4" id="ObjectiveJauge">
                    <div className="statdescri">Objectif rempli à</div>
                    <ProgressBar percentage={this.state.goalPercent} backgroundStyle="azure" />
                </div>

                {/* <div className="statsblock center p-4 m-4" id="GamesFav">
                    <span className="statdescri">jeux les plus joués</span>
                    <table className="w-100 mt-4">
                        <tbody>
                            <tr className="w-100">

                                <td className="w-50">
                                    <div className="card border-info text-center m-3">
                                        <div className="card-header">
                                            <img className="statimg card-img-top rounded mx-auto d-block" src="/ressources/jeu1.jpg" alt="Card" />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text text-info">Jeu1 example</p>
                                        </div>
                                    </div>
                                </td>

                                <td className="w-50">
                                    <div className="card border-info text-center m-3">
                                        <div className="card-header">
                                            <img className="statimg card-img-top rounded mx-auto d-block" src="/ressources/jeu2.jpg" alt="Card" />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text text-info">Jeu1 example</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="w-100">

                                <td className="w-50">
                                    <div className="card border-info text-center m-3">
                                        <div className="card-header">
                                            <img className="statimg card-img-top rounded mx-auto d-block" src="/ressources/jeu3.jpg" alt="Card" />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text text-info">Jeu1 example</p>
                                        </div>
                                    </div>
                                </td>

                                <td className="w-50">
                                    <div className="card border-info text-center m-3">
                                        <div className="card-header">
                                            <img className="statimg card-img-top rounded mx-auto d-block" src="/ressources/jeu4.jpg" alt="Card" />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text text-info">Jeu1 example</p>
                                        </div>
                                    </div>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div> */}
            </div>
        )
    }
}

export default Statistics
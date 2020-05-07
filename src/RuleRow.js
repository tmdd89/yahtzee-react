import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    let { score, name, doScore, description, rolling } = this.props;
    const disabled = score !== undefined;
    return (
      <tr
        className={`RuleRow RuleRow-${disabled ? "disabled" : "active"}`}
        onClick={disabled || rolling ? null : doScore}
        disabled={this.props.disabled}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{disabled ? score : description}</td>
      </tr>
    );
  }
}

export default RuleRow;

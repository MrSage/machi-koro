import React from 'react';
import {Cards} from '../../cards';
import './card.css';

export const Card = (props) => renderCard(Cards[props.type], props.free, props.enabled);

const renderCard = (card, free, enabled) => (
	<div className={cardClassNames(card, enabled)}>
		<div className="card-top">
			<div className="roll">{rollDisplayString(card.roll)}</div>
			<div className="label">{card.name}</div>
			<div className="description">{card.description}</div>
		</div>
		<div className="card-bottom">
			<div className="cost">{costDisplayString(card.cost, free)}</div>
		</div>
	</div>
);

const rollDisplayString = value => value === undefined ? (<span>&nbsp;</span>) : value;

const costDisplayString = (value, free) => free ? (<span>&nbsp;</span>) : value;

const cardClassNames = (card, enabled) => {
	if (enabled === false) {
		return "card card-disabled";
	}

	return "card card-" + card.category;
};


import React, {Component} from 'react';
import GalleryModal from './GalleryModal';

import abdelrahman_hassanein_358776_unsplash from '../../images/abdelrahman_hassanein_358776_unsplash.jpg';
import anton_repponen_99546_unsplash from '../../images/anton_repponen_99546_unsplash.jpg';
import caterina_sanders_397156_unsplash from '../../images/caterina_sanders_397156_unsplash.jpg';
import david_clode_453269_unsplash from '../../images/david_clode_453269_unsplash.jpg';
import elijah_hiett_401346_unsplash from '../../images/elijah_hiett_401346_unsplash.jpg';
import eniko_polgar_81606_unsplash from '../../images/eniko_polgar_81606_unsplash.jpg';
import matthew_meredith_364671_unsplash from '../../images/matthew_meredith_364671_unsplash.jpg';
import michal_prucha_233888_unsplash from '../../images/michal_prucha_233888_unsplash.jpg';
import mohamed_nohassi_427279_unsplash from '../../images/mohamed_nohassi_427279_unsplash.jpg';
import nasa_90395_unsplash from '../../images/nasa_90395_unsplash.jpg';
import roi_dimor_427577_unsplash from '../../images/roi_dimor_427577_unsplash.jpg';
import sammy_leigh_scholl_157431_unsplash from '../../images/sammy_leigh_scholl_157431_unsplash.jpg';

const imgUrls = [
	abdelrahman_hassanein_358776_unsplash,
	anton_repponen_99546_unsplash,
	matthew_meredith_364671_unsplash,
	nasa_90395_unsplash,
	caterina_sanders_397156_unsplash,
	sammy_leigh_scholl_157431_unsplash,
	roi_dimor_427577_unsplash,
	michal_prucha_233888_unsplash,
	elijah_hiett_401346_unsplash,
	david_clode_453269_unsplash,
	eniko_polgar_81606_unsplash,
	mohamed_nohassi_427279_unsplash
];

class Gallery extends Component {
	state = {
		currentIndex: null
	};
	renderImageContent(src, index) {
		return (
			<div key={src} onClick={(e) => this.openModal(e, index)}>
				<img src={src} height="100%" />
			</div>
		)
	}
	openModal = (e, index) => {
		this.setState({
			currentIndex: index
		});
	}
	closeModal = (e) => {
		if(e != undefined) {
			e.preventDefault();
		}
		this.setState({
			currentIndex: null
		});
	}
	findPrev = (e) => {
		let currentIndex = this.state.currentIndex;
		if(e != undefined) {
			e.preventDefault();
		}
		if(currentIndex >= 1) {
			this.setState(prevState => ({
				currentIndex: prevState.currentIndex - 1
			}))
		}
	}
	findNext = (e) => {
		let currentIndex = this.state.currentIndex;
		if(e != undefined) {
			e.preventDefault();
		}
		if(currentIndex + 1 < imgUrls.length) {
			this.setState(prevState => ({
				currentIndex: prevState.currentIndex + 1
			}));
		}
	}
	render() {
		return (
			<div className='gallery-container'>
				<header><div data-text='What a Sizzler!' className='title'></div></header>
				<div className='gallery-grid'>
					{imgUrls.map(this.renderImageContent.bind(this))}
				</div>
				<GalleryModal
					closeModal={this.closeModal.bind(this)}
					findPrev={this.findPrev.bind(this)}
					findNext={this.findNext.bind(this)}
					hasPrev={this.state.currentIndex > 0}
					hasNext={this.state.currentIndex + 1 < imgUrls.length}
					src={imgUrls[this.state.currentIndex]}
				/>
			</div>
		)
	}
}

export default Gallery;

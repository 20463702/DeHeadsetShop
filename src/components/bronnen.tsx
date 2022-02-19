import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Bronnen = ({ showBronnen, setShowBronnen }: any) => {

	const toggleBronnen = () => {setShowBronnen(!showBronnen)}

	return (
		<>
			<div className="button-container">
				<button
					className={showBronnen ? "button-selected" : ""}	
					onClick={() => {toggleBronnen()}}
				>
					{showBronnen ? "Verberg Bronnen" : "Open Bronnen"}
				</button>
			</div>
			{showBronnen ?
			<div className="text-container">
				<p>NCBI - Virtual reality and the transformation of medical education. (2019, oktober). National Center for Biotechnology Information. Geraadpleegd op 6 februari 2022, van https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6798020/</p> <br/>
				<p>Thompson, S. (2020, 11 december). VR Applications: 21 Industries already using Virtual Reality. Virtualspeech. Geraadpleegd op 6 februari 2022, van https://virtualspeech.com/blog/vr-applications</p> <br/>
				<p>Wikipedia contributors. (2022, 6 februari). Virtual reality applications. Wikipedia. Geraadpleegd op 6 februari 2022, van https://en.wikipedia.org/wiki/Virtual_reality_applications</p> <br/>
				<p>B, S. (z.d.). History of Virtual Reality (VR) – VR.org. Vr.Org. Geraadpleegd op 20–22 januari 2022, van https://www.vr.org/about-us/history-of-vr/</p><br/>
				<p>Barnard, D. (2019, 6 augustus). History of VR - Timeline of Events and Tech Development. Virtualspeech. Geraadpleegd op 20–21 januari 2022, van https://virtualspeech.com/blog/history-of-vr</p><br/>
				<p>History of Virtual Reality. (2019, 19 december). The Franklin Institute. Geraadpleegd op 20–21 januari 2022, van https://www.fi.edu/virtual-reality/history-of-virtual-reality</p><br/>
				<p>Wikipedia contributors. (2001, 3 oktober). Virtual reality. Wikipedia. Geraadpleegd op 20–22 januari 2022, van https://en.wikipedia.org/wiki/Virtual_reality</p><br/>
				<p>Wikipedia contributors. (2020, 13 december). Myron W. Krueger. Wikipedia. Geraadpleegd op 21 januari 2022, van https://en.wikipedia.org/wiki/Myron_W._Krueger</p><br/>
				<p>Wikipedia contributors. (2021a, april 26). VPL Research. Wikipedia. Geraadpleegd op 21 januari 2022, van https://en.wikipedia.org/wiki/VPL_Research</p><br/>
				<p>Wikipedia contributors. (2021b, juli 26). Sensorama. Wikipedia. Geraadpleegd op 20 januari 2022, van https://en.wikipedia.org/wiki/Sensorama</p><br/>
				<p>Wikipedia contributors. (2021c, november 27). Morton Heilig. Wikipedia. Geraadpleegd op 20 januari 2022, van https://en.wikipedia.org/wiki/Morton_Heilig</p><br/>
				<p>Wikipedia contributors. (2021d, december 30). The Sword of Damocles (virtual reality). Wikipedia. Geraadpleegd op 21 januari 2022, van https://en.wikipedia.org/wiki/The_Sword_of_Damocles_(virtual_reality)</p><br/>
				<p>Wikipedia contributors. (2022a, januari 9). Douglas Engelbart. Wikipedia. Geraadpleegd op 20 januari 2022, van https://en.wikipedia.org/wiki/Douglas_Engelbart</p><br/>
				<p>Wikipedia contributors. (2022b, januari 12). Oculus (brand). Wikipedia. Geraadpleegd op 21 januari 2022, van https://en.wikipedia.org/wiki/Oculus_(brand)</p><br/>
				<p>Wikipedia contributors. (2022c, januari 14). Ivan Sutherland. Wikipedia. Geraadpleegd op 20 januari 2022, van https://en.wikipedia.org/wiki/Ivan_Sutherland</p><br/>
				<p>Wikipedia contributors. (2022d, januari 15). Haptic technology. Wikipedia. Geraadpleegd op 21 januari 2022, van https://en.wikipedia.org/wiki/Haptic_technology</p><br/>
			</div> : <></>}
		</>
	)
}

Bronnen.propTypes = {
	showBronnen: PropTypes.bool.isRequired,
	setShowBronnen: PropTypes.func.isRequired,
}

export default Bronnen
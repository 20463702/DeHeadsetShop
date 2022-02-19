import React from 'react';
import imgGezondheidszorg from '../img/applicaties/gezondheidszorg.png';
import imgVastgoed from '../img/applicaties/vastgoed.png';
import imgEntertainment from '../img/applicaties/entertainment.png';

const Applicaties = () => {
  return (
    <>
    <div className="text-container">
    	<h2>Gezondheidszorg</h2>
		<div className="par-text">
    		<div>
    			<p>
        			De gezondheidszorg in een belangrijke toepassing waar VR een aanzienlijke impact kan hebben. Zorgprofessionals gebruiken nu virtuele modellen om zich voor te bereiden op het werken aan echte lichamen en VR is zelfs gebruikt als pijnverlichting.
        		</p>
        		<p>
	     			VR kan ook worden gebruikt als een behandeling voor psychische problemen, waarbij Virtual Reality Exposure Therapy bijzonder effectief wordt geacht bij de behandeling van PTSS en angst. Er zijn veel andere manieren waarop tijd doorbrengen in VR therapeutische voordelen kan hebben.
				</p>
			</div>
		    <img src={imgGezondheidszorg} alt="gezondheidszorg"/>
        </div>
    </div>

    <div className="text-container">
        <h2>Toerisme</h2>
        <div className="par-text">
            <div>
                <p>
                    Stel je voor dat je je vakantie kunt proberen voordat je haar koopt. Dat is precies wat de toekomst zou kunnen brengen. De industrie neemt de eerste stappen om u in staat te stellen begeleide virtuele rondleidingen door hotels, restaurants en toeristische bezienswaardigheden te maken.
                </p>
                <p>
                    Thomas Cook lanceerde hun 'Try Before You Fly' VR-ervaring in 2015, waarbij potentiële vakantiegangers winkels in verschillende landen bezoeken om de vakantie in VR te ervaren voordat ze deze boeken. Er was een 190% stijging in New York excursies boekingen nadat mensen probeerden de 5 minuten versie van de vakantie in VR.
                </p>
            </div>
        </div>
    </div>

    <div className="text-container">
        <h2>Vastgoed</h2>
        <div className="par-text">
            <div>
                <p>
                    U kunt rond eigenschappen kijken vanuit het comfort van uw [bestaand] huis - geen makelaar of het opofferen van uw weekend nodig. Hierdoor kunnen mensen huizen online verkennen en vervolgens alleen de huizen bekijken waar je waarschijnlijk het meest van houdt. Matterport loopt voorop en heeft al duizenden huizen gescand met behulp van hun scan hardware.
                </p>
            </div>
            <img src={imgVastgoed} alt="vastgoed industrie"/>
        </div>
    </div>

    <div className="text-container">
        <h2>Architectuur</h2>
        <div className="par-text">
            <div>
                <p>
                    VR verandert geleidelijk de manier waarop architecten ontwerpen en experimenteren met hun werk. VR maakt het mogelijk om niet alleen te zien hoe een gebouw of ruimte eruit zal zien, maar ook hoe het zal voelen. Huiseigenaren kunnen de ruimte ervaren voordat deze fysiek wordt gebouwd en realtime wijzigingen aanbrengen, wat de klant en de architect tijd en geld bespaart evenals een toenemende tevredenheid bij voltooiing van het project.
                </p>
            </div>
        </div>
    </div>

    <div className="text-container">
        <h2>Entertainment en Recreatie</h2>
        <div className="par-text">
            <div>
                <p>
                    VR wordt in de entertainmentindustrie gebruikt om ervaringen met 360-graden films te verhogen en je emotionele band met de personages te vergroten. Disney Movies VR neemt de gebruiker bijvoorbeeld mee naar rode loper-evenementen en naar een interview met de cast van 'The Jungle Book'.
                </p>
                <p>
                    Veel echte hobby's zijn beschikbaar in VR en de meeslepende ervaring maakt ze des te leuker en toegankelijker. Als je een fan bent van culturele activiteiten, kun je musea bezoeken zoals het Natural History Museum in Londen of, als je meer een sensatiezoeker bent, is er zelfs een VR-themapark geopend in China. Een van de meer unieke manieren waarop VR wordt gebruikt, is door Galatea, die een tool voor het beheer van schrijf- en verhalend ontwerp biedt voor meeslepende verhalen. VR themapark in China van SLQJ.
                </p>
            </div>
            <img src={imgEntertainment} alt="entertainment industrie"/>
        </div>
    </div>

    <div className="text-container">
        <h2>Onderwijs</h2>
        <div className="par-text">
            <div>
                <p>
                    VR kan een revolutie teweegbrengen in het onderwijs door studenten in staat te stellen op een meeslepende, ervaringsgerichte manier te leren. Unimersiv heeft apps waarmee gebruikers een rondleiding door het oude Rome kunnen maken, het menselijk brein kunnen verkennen en aan boord van de Titanic kunnen gaan. ImmersiveVREducation bouwt een VR-klaslokaal met hun 'Engage'-product, waar mensen kunnen leren van docenten over de hele wereld.
                </p>
            </div>
        </div>
    </div>

    <div className="text-container">
        <h2>Welzijn</h2>
        <div className="par-text">
            <div>
                <p>
                    Met de stijgende populariteit voor welzijn en meditatie, is het niet verwonderlijk dat er VR-toepassingen zijn waarmee gebruikers zich kunnen onderdompelen in een meditatieve ruimte. Begeleide Meditatie-VR is extreem populair en omringt de gebruiker met prachtige 360°-beelden terwijl ze luisteren naar rustgevende muziek en een geleide meditatie.
                </p>
            </div>
        </div>
    </div>

    </>
  )
}

export default Applicaties
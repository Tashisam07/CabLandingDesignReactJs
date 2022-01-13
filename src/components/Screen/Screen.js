import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import Directions from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import "./Screen.css";
import FavoriteItems from "./component/FavoriteItems";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";


mapboxgl.accessToken =
	"pk.eyJ1IjoidGFzaGlzYW0yMDU3IiwiYSI6ImNrdTZ2ZTU4aDJrdGMycHBjNGk1c2tvN3oifQ.yRgd-k38B0tm3qa8VpUUDw";
export class Map extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lng: 77.626579,
			lat: 12.934533,
			zoom: 13,
		};
		this.mapContainer = React.createRef();
	}
	componentDidMount() {
		const { lng, lat, zoom } = this.state;
		const map = new mapboxgl.Map({
			container: this.mapContainer.current,
			style: "mapbox://styles/tashisam2057/ckui4o6du4re517pm31kb8s09",
			center: [lng, lat],
			zoom: zoom,
		});
		const marker = new mapboxgl.Marker({color: 'black', fontSize: '40px'});
		marker.setLngLat([lng,lat]);
		marker.addTo(map);
		
		map.addControl(
			new mapboxgl.GeolocateControl({
				positionOptions: {
					enableHighAccuracy: true
				},
				// When active the map will receive updates to the device's location as it changes.
				trackUserLocation: true,
				// Draw an arrow next to the location dot to indicate which direction the device is heading.
				showUserHeading: true
			})
		);
		map.addControl(new mapboxgl.NavigationControl());

		const directions = new Directions({
			accessToken: mapboxgl.accessToken,
			placeholderOrigin: 'Where from?',
			placeholderDestination: 'Where to?',
			profile: 'mapbox/driving',
			unit: 'metric',
			zoom: 10,
			controls:{
				inputs: true,
				instructions: false,
				profileSwitcher: false,
			}
		})
		document.getElementById('search').appendChild(directions.onAdd(map));

		const geojson = {
			'type': 'FeatureCollection',
				'features': [
				{
				'type': 'Feature',
				'properties': {
					'message': 'cab in service',
					'iconSize': [35,35],
					'rotate': 90
				},
				'geometry': {
				'type': 'Point',
				'coordinates': [77.62264, 12.9424]
				}
				},
				{
				'type': 'Feature',
				'properties': {
					'message': 'cab available',
					'iconSize': [35, 35],
					'rotate': 40
				},
				'geometry': {
				'type': 'Point',
				'coordinates': [77.6120, 12.9383]
				}
				},
				{
				'type': 'Feature',
				'properties': {
					'message': 'cab available',
					'iconSize': [35, 35],
					'rotate': 20
				},
				'geometry': {
				'type': 'Point',
				'coordinates': [77.610636, 12.9375633]
				}
				},
				{
				'type': 'Feature',
				'properties': {
					'message': 'cab available',
					'iconSize': [35, 35],
					'rotate': 20
				},
				'geometry': {
				'type': 'Point',
				'coordinates': [77.6133637, 12.93184]
				}
				},
				{
				'type': 'Feature',
				'properties': {
					'message': 'cab available',
					'iconSize': [35, 35],
					'rotate': 20
				},
				'geometry': {
				'type': 'Point',
				'coordinates': [77.63272, 12.938425]
				}
				}
				]
			};
			for (const marker of geojson.features) {
				// Create a DOM element for each marker.
				const el = document.createElement('div');
				const width = marker.properties.iconSize[0];
				const height = marker.properties.iconSize[1];
				const rotate = marker.properties.rotate;
				el.className = 'marker';
				el.style.backgroundImage = `url(https://png2.cleanpng.com/sh/50bf1177ed75293ab1345fce6a4e24cd/L0KzQYm3U8MxN5dpiZH0aYP2gLBuTfNiel51fedwZXB3PYS3V711d6p0jNM2Y3B1f73zgb11d6p0jNM2YYX1ecS0gBFzNaV0iJ8AYXLoQoi3VPM1bGM7SZCDMkG0SYa6UME2OmM5SaM7Nki7QIe5TwBvbz==/kisspng-car-peugeot-307-toyota-corolla-toyota-auris-car-top-5abe2704c4d261.8211953015224112688062.png)`;
				el.style.width = `40px`;
				el.style.height = `40px`;
				el.style.transform = `rotate(90deg)`;
				el.style.backgroundSize = '100%';
				
				el.addEventListener('click', () => {
					window.alert(marker.properties.message);
				});
				// Add markers to the map.
				new mapboxgl.Marker(el)
				.setLngLat(marker.geometry.coordinates)
				.addTo(map);
			}
	}
	render() {
		return (
			<div className="screen_container">
				<div ref={this.mapContainer} className="map-container" />
				<div className="search_container">
					<div className="search_box">
						<div id='search' className="search"></div>
						{/* <div id='geocoder_from' className="geocoder"></div>
						<div id='geocoder_to' className="geocoder"></div> */}
						<div className="wishlist">
							<FavoriteItems Icon={HomeIcon} title='Home' location='Koramangala 4th Block'/>
							<FavoriteItems Icon={WorkIcon} title='Work' location='Infosys, BTM layout'/>
						</div>
					</div>
				</div>
					<div className="card_container">
						<div className="card_front">
							<div className="card_header">	
								<img src="https://img.icons8.com/windows/32/000000/uber.png" alt='logo'/>
								<span>10/05</span>
							</div>
							<span className="card_number">
								1234 4567 8901 2345
							</span>
							<div className="card_footer">
								<img 
									className='chip_logo' 
									src="https://www.vhv.rs/dpng/d/469-4690777_credit-card-chip-png-card-chip-icon-png.png" 
									alt="card chip png" 
								/>
								<img 
									className='mastercard_logo' 
									src="https://img.icons8.com/ios-glyphs/30/000000/mastercard.png"
									alt='mastercard'
								/>
							</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Map;

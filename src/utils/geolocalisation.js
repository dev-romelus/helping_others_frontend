/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const timezone = Object.freeze({ fr: 'Europe/Paris' });

function getTimezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

async function getLocation({ longitude, latitude }) {
    const { data } = await axios.get(`https://api-adresse.data.gouv.fr/reverse/?lon=${longitude}&lat=${latitude}`);
    const location = data.features[0].properties;

    return location;
}

async function getCurrentPosition(callback) {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        const { latitude, longitude } = coords;
        callback({ latitude, longitude });
    });

}

export default { getLocation, getCurrentPosition, getTimezone, timezone }

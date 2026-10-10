// Banque de vraies photos (Pexels, libres de droits) organisées par thème.
// Remplacer par de vraies photos de flotte IVOLT dès qu'elles sont disponibles.

function px(id: number, w = 1600): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

export const img = {
  heroCar: px(24376862, 2000),
  heroCarNight: px(19410949, 2000),
  teslaRoad: px(19041161, 2000),
  dealershipNight: px(5864155, 2000),

  showroomCar1: px(33322120, 1800),
  showroomCar2: px(10029775, 1800),
  dealershipLuxury: px(7387470, 1800),

  motoRiderRed: px(18012148, 1800),
  motoRiderStreet: px(6628341, 1800),

  deliveryRider1: px(12203732, 1800),
  deliveryRider2: px(33411898, 1800),
  deliveryRider3: px(12203654, 1800),
  deliveryRider4: px(7362948, 1800),
  deliveryRider5: px(19972996, 1800),
  deliveryRider6: px(11357581, 1800),

  driverPhone: px(30954662, 1600),
  driverWheel: px(10029874, 1600),
  carDashButtons: px(7192148, 1600),

  evDashTesla: px(18968756, 1800),
  evScreenTesla: px(17345641, 1800),
  evInteriorDark: px(30802741, 1800),

  evChargingRoadside: px(5864153, 1800),
  evChargingUrban: px(30361373, 1800),

  solarFarm1: px(4148472, 2000),
  solarFarmAerial: px(16659262, 2000),
  solarFarm2: px(15751131, 2000),
  solarFarmTexture: px(6572421, 2000),

  solarRoofClose: px(9875442, 1800),
  solarRoofHouse: px(17965455, 1800),
  solarRoofAerial: px(9875680, 1800),

  solarWorker1: px(8853539, 1800),
  solarWorker2: px(35237908, 1800),
  solarWorker3: px(9875418, 1800),
  solarWorker4: px(8853505, 1800),
  solarWorker5: px(9875444, 1800),
  solarWorker6: px(8853507, 1800),
  solarWorker7: px(6961112, 1800),

  partnershipHandshake1: px(33175653, 1800),
  partnershipHandshake2: px(8428059, 1800),
  partnershipHandshake3: px(6931199, 1800),
  partnershipHandshake4: px(5673488, 1800),

  chargePlug1: px(9799736, 1800),
  chargePlug2: px(35736773, 1800),
  chargePlug3: px(9799743, 1800),

  mechanic1: px(11890957, 1800),
  mechanic2: px(12741638, 1800),
  mechanic3: px(11890963, 1800),

  teamBrainstorm: px(6592562, 1800),
  teamOffice1: px(7792836, 1800),
  teamOffice2: px(29267512, 1800),
  teamHighFive: px(7793692, 1800),
  teamComputers: px(3184357, 1800),

  cityMotoTraffic1: px(30726387, 2000),
  cityMotoTraffic2: px(32123175, 2000),
  cityRushHour: px(12463347, 2000),
  cityMotoCar: px(19513039, 2000),
  cityNightMoto: px(19488232, 2000),

  portraitWoman1: px(29852895, 1200),
  portraitWoman2: px(34027412, 1200),
  portraitWoman3: px(20209020, 1200),
  portraitWoman4: px(5905895, 1200),
  portraitWoman5: px(34381970, 1200),

  portraitMan1: px(30386124, 1200),
  portraitMan2: px(5648096, 1200),
  portraitMan3: px(32012999, 1200),
  portraitMan4: px(28441026, 1200),
  portraitMan5: px(5648099, 1200),

  motoFleetParked: px(28670971, 2000),
  stationCharger1: px(9799999, 1800),
  stationCharger2: px(11554746, 1800),
  stationCharger3: px(9800000, 1800),
} as const;

export type ImgKey = keyof typeof img;

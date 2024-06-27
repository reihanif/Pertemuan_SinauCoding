var totalBus = 10;
var busOperations = 6;
var busNumber = 1;

while (busNumber <= totalBus){
    if (busNumber < 7) {
        console.log('Bus Transjakarta ' + busNumber + ' beroprasi dengan baik.');
    } else if (busNumber == 8) {
        console.log('Bus Transjakarta ' + busNumber + ' sedang lembur.');
    } else if (busNumber >= 7) {
        console.log('Bus Transjakarta ' + busNumber + ' sedang tidak beroperasi.');
    }
    busNumber++;
}
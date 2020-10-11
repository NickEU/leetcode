public class LC1603_1_Design_Parking_System {
    /**
     * Your ParkingSystem object will be instantiated and called as such:
     * ParkingSystem obj = new ParkingSystem(big, medium, small);
     * boolean param_1 = obj.addCar(carType);
     */
    class ParkingSystem {
        private final int[] availableSpace = new int[3];

        public ParkingSystem(int big, int medium, int small) {
            availableSpace[0] = big;
            availableSpace[1] = medium;
            availableSpace[2] = small;
        }

        public boolean addCar(int carType) {
            int storageIdx = carType - 1;
            if (availableSpace[storageIdx] > 0) {
                availableSpace[storageIdx]--;
                return true;
            }
            return false;
        }
    }
}

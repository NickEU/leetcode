public class LC1598_1_CrawlerLogFolder {
    public int minOperations(String[] logs) {
        int currFolderDepth = 0;
        for (var log : logs) {
            switch (log) {
                case "../":
                    currFolderDepth = currFolderDepth == 0 ? 0 : currFolderDepth - 1;
                    break;
                case "./":
                    // do nothing
                    break;
                default:
                    currFolderDepth += 1;
            }
        }
        return currFolderDepth;
    }
}

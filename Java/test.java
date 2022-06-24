public class Language {

    protected String name;
    protected int numSpeakers;
    protected String regionsSpoken;
    protected String wordOrder;
  
    public Language(String name, int numSpeakers, String regionsSpoken, String wordOrder) {
      this.name = name;
      this.numSpeakers = numSpeakers;
      this.regionsSpoken = regionsSpoken;
      this.wordOrder = wordOrder;
    }
  
    public void getInfo() {
      System.out.println(this.name + " is spoken by " + this.numSpeakers + " people mainly in " + this.regionsSpoken + ". \nThe language follows the word order: " + this.wordOrder + ".");
    }
  
    public static void main(String[] args) {
      Language Spanish = new Language("Spanish", 555000000, "Spain, Latin America, and Equatorial Guinea", "subject-verb-object");
      Spanish.getInfo();
      // System.out.println("\n");
  
    //   Language Chontal = new Mayan("Chontal", 36810);
    //   // Chontal.getInfo();
    //   // System.out.println("\n");
      
    //   Language MandarinChinese = new SinoTibetan("Mandarin Chinese", 920000000);
    //   // MandarinChinese.getInfo();
    //   // System.out.println("\n");
  
    //   Language Burmese = new SinoTibetan("Burmese", 33000000);
    //   // Burmese.getInfo();
    //   // System.out.println("\n");
  
    //   Language[] allTheLanguages = {Spanish, Chontal, MandarinChinese, Burmese};
    //   for (Language language : allTheLanguages) {
    //     language.getInfo();
    //     System.out.println("\n");
    //  }
    }
}
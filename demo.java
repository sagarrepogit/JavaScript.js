public static int longestSubsequence(String x, String y){
    int n=x.length();
    int m=y.length();
    int maxlen=0;
    for(int i=0;i<m;i++){
        for(int j=0;j<)
        String subY= y.substring(i,j+1);
        if
    }s.tocharArray()
    map <character, integer> hashmap= new hashmap<character, integer>();
String []str=s.tocharArray();
for(char c: str){
if(hashmap.contains(c))
hashmap.put(c,hashmap.get(c)+1)

}
else hashmap.put(c,1);
}
System.out.println(str, hashmap)
int scores[]=new int[4];

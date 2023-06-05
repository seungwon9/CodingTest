import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);

		int n=sc.nextInt();
		int cnt=n;
		
		for(int i=0;i<n;i++) {
			boolean[] arr=new boolean[26];
			String s=sc.next();
			
			for(int j=0;j<s.length()-1;j++) {
				if(s.charAt(j)!=s.charAt(j+1)) {
					if(arr[s.charAt(j+1)-'a']==true) {
						cnt--;
						break;
					}
				}
				arr[s.charAt(j)-'a']=true;
			}
		}
		System.out.println(cnt);
	}
}
import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		
		String s=sc.nextLine();
		int cnt=1;
		
		for(int i=1;i<=s.length();i++) {
	
			if(s.substring(i-1,i).equals(" ")) {
				cnt++;
			}
		}
		if(s.charAt(0)==' ') {
			cnt--;
		}
		if(s.charAt(s.length()-1)==' ') {
			cnt--;
		}
		System.out.println(cnt);
	}
}
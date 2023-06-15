import java.util.Scanner;
public class Main {

	public static void main(String[] args){
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		
		String s=sc.next();
		boolean b=true;
		for(int i=0;i<s.length()/2;i++) {
			if(s.charAt(i)!=s.charAt(s.length()-i-1)) {
				b=false;
				break;
			}
		}
		if(b==true)
			System.out.println("1");
		else
			System.out.println("0");
	}
}

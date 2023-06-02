import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		String s=sc.next();
		int sum=0;
		char[] c=s.toCharArray();
		for(int i=0;i<c.length;i++) {
			sum+=c[i]-'0';
		}
		System.out.println(sum);
	}

}
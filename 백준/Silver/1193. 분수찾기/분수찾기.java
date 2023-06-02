import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);

		int n = sc.nextInt();
		int a=1;
		int i;
		for(i=1;a<=n;i++) {
			a+=i;
		}
		i-=1;
		a=a-i;
		int b=n-a+1;
		int c=i-(n-a);
		if(i%2==0)
			System.out.println(b+"/"+c);
		else
			System.out.println(c+"/"+b);
		
	}
}
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);

		int a=sc.nextInt();
		int b=sc.nextInt();
		int c=sc.nextInt();
		
		int n=0;
		if(c>b)
			System.out.println(a/(c-b)+1);
		else
			System.out.println(-1);
	}
}
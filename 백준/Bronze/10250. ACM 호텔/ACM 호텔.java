import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);

		int t=sc.nextInt();
		for(int i=0;i<t;i++) {
			int h = sc.nextInt();
		int w=sc.nextInt();
		int n=sc.nextInt();
		int x=n/h+1;
		int y=n%h;
		if(n%h==0) {
			if(n/h<10) 
				System.out.println(h+"0"+(n/h));
			else
				System.out.println(h+""+(n/h));
		}
		else {
			if(x<10)
				System.out.println((n%h)+"0"+(n/h+1));
			else
				System.out.println((n%h)+""+(n/h+1));
		}
		}
			
	}
}
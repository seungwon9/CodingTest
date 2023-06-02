import java.util.Scanner;

class Number{
	int d(int n) {
		int count=0;
		if(n<100) {
			count=n;
		}
		else {
			count=99;
			for(int i=100;i<=n;i++) {
				int hun=i/100;
				int ten=(i/10)%10;
				int one=i%10;
				
				if((hun-ten)==(ten-one))
					count++;
			}
		}
		return count;
	}
}

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		Number number=new Number();
		int n=sc.nextInt();
		System.out.println(number.d(n));
	}
}
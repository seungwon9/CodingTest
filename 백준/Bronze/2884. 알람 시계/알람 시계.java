import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		int h=sc.nextInt();
		if(h>23||h<0)
			return;
		int m=sc.nextInt();
		if(m>59||m<0)
			return;
		if(m>=45)
			System.out.println(h+" "+(m-45));
		else
		{
			h--;
			m+=15;
			if(h<0)
				System.out.println(23+" "+m);
			else
				System.out.println(h+" "+m);
		}	
	}
}
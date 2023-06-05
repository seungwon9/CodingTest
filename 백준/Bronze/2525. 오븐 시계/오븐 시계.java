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
		int c=sc.nextInt();
		if(c>1000||c<0)
			return;
		m+=c;
		while(m>=60) {
			m-=60;
			h++;
			if(h>23)
				h-=24;
		}
		System.out.println(h+" "+m);
	}
}
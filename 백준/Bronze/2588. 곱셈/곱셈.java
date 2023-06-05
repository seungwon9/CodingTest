import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		int a,b;
		a=sc.nextInt();
		if(a>999||a<0)
			return;
		b=sc.nextInt();
		if(b>999||b<0)
			return;
		int c,d,e;
		
		c=b/100;
		d=(b/10)%10;
		e=b%10;
		System.out.println(a*e);
		System.out.println(a*d);
		System.out.println(a*c);
		System.out.println(a*e+(a*d)*10+(a*c)*100);
	}

}

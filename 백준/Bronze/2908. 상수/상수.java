import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		
		int n1=sc.nextInt();
		int n2=sc.nextInt();
		
		n1=(n1%10)*100+((n1/10)%10)*10+n1/100;
		n2=(n2%10)*100+((n2/10)%10)*10+n2/100;
		
		System.out.println(n1>n2 ? n1:n2);
	}
}
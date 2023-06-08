class Number{
	int d(int n) {
		
		int sum=n;
		while(n>0) {
			sum+=n%10;
			n=n/10;
		}
		
		return sum;
	}
}
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Number number=new Number();
		boolean[] a=new boolean[10001];
		
		for(int i=1;i<10001;i++) {
			int n=number.d(i);
			if(n<10001)
				a[n]=true;
		}
		for(int i=1;i<10001;i++) {
			if(a[i]!=true) {
				System.out.println(i);
			}
		}
	}
}
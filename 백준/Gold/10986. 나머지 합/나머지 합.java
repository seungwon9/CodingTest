
import java.util.Scanner;
public class Main {

	public static void main(String[] args){
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		
		int N=sc.nextInt();
		int M=sc.nextInt();
		long s[]=new long[N];
		long c[]=new long[M];
		long cnt=0;
		
		s[0]=sc.nextInt();
		for(int i=1;i<N;i++) {
			s[i]=s[i-1]+sc.nextInt();
		}
		for(int i=0;i<N;i++) {
			int r=(int)(s[i]%M);
			if(r==0)
				cnt++;
			c[r]++;
		}
		for(int i=0;i<M;i++) {
			if(c[i]>0) {
				cnt=cnt+(c[i]*(c[i]-1)/2);
			}
		}
		System.out.println(cnt);
	}
}

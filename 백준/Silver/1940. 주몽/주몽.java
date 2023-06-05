import java.util.Scanner;
public class Main {

	public static void main(String[] args){
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		
		int N=sc.nextInt();
		int M=sc.nextInt();
		int a[]=new int[N];
		int cnt=0;
		for(int i=0;i<N;i++) {
			a[i]=sc.nextInt();
		}
		for(int i=0;i<N;i++) {
			int c=M-a[i];
			for(int j=i+1;j<N;j++) {
				if(a[j]==c)
					cnt++;
			}
		}
		System.out.print(cnt);
	}
}
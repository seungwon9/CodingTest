import java.util.Scanner;
public class Main {

	public static void main(String[] args){
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		
		int N=sc.nextInt();
		int cnt=0;
		for(int i=0;i<N;i++) {
			int s=0;
			for(int j=i+1;s<N;j++) {
				s=s+j;
				if(s==N)
					cnt++;
				
			}
		}
		System.out.print(cnt);
	}
}
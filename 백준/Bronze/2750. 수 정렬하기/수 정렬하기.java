import java.util.*;
import java.io.*;
public class Main {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub

		Scanner sc=new Scanner(System.in);
		int N=sc.nextInt();
		int a[]=new int[N];
		for(int i=0;i<N;i++) {
			a[i]=sc.nextInt();
		}
		for(int i=0;i<N-1;i++) {
			for(int j=0;j<N-1-i;j++) {
				if(a[j+1]<a[j]) {
					int temp=a[j];
					a[j]=a[j+1];
					a[j+1]=temp;
				}
			}
		}
		for(int i=0;i<N;i++) {
			System.out.println(a[i]);
		}
	}
}

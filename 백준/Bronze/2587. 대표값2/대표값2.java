import java.util.*;
import java.io.*;
public class Main {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub

		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
		int a[]=new int[5];
		int sum=0;
		for(int i=0;i<5;i++) {
			a[i]=Integer.parseInt(br.readLine());
			sum+=a[i];
		}
		for(int i=0;i<5-1;i++) {
			for(int j=0;j<5-i-1;j++) {
				if(a[j+1]<a[j]) {
					int temp=a[j];
					a[j]=a[j+1];
					a[j+1]=temp;
				}
			}
		}
		System.out.println(sum/5);
		System.out.println(a[2]);
		
	}
}

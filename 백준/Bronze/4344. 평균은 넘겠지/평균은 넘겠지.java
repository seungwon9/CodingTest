import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		
		for(int i=0;i<n;i++) {
			int a=sc.nextInt();
			int arr[]=new int[a];
			int sum=0;
			double ave=0;
			double count=0;
			double result=0;
			
			for(int j=0;j<a;j++) {
				arr[j]=sc.nextInt();
				sum+=arr[j];
			}
			ave=sum/a;
			for(int j=0;j<a;j++) {
				if(arr[j]>ave) {
					count++;
				}
			}
			result=(count/a)*100;
			System.out.printf("%.3f%%\n",result);
		}
	}
}
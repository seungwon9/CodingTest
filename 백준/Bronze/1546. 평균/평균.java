import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		int max=0;
		double sum=0;
		int n=sc.nextInt();
		double arr[]=new double[n];
		for(int i=0;i<n;i++) {
			arr[i]=sc.nextInt();
			if(arr[i]>max)
				max=(int) arr[i];
		}
		for(int i=0;i<n;i++) {
			arr[i]=arr[i]/max*100;
			sum+=arr[i];
		}
		System.out.println(sum/n);
	}
}
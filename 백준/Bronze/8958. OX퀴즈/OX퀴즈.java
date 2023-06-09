import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		int count=0;
		int sum=0;
		int n=sc.nextInt();
		String arr[]=new String[n];
		for(int i=0;i<n;i++) {
			arr[i]=sc.next();
		}
		for(int i=0;i<n;i++) {
			for(int j=0;j<arr[i].length();j++) {
				if(arr[i].charAt(j)=='O') {
					count++;
					sum+=count;
				}
				else {
					count=0;
				}
			}
			System.out.println(sum);
			sum=0;count=0;
		}
	}
}
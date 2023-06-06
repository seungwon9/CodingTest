import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		int count=10;
		int arr[]=new int[10];
		int arr2[]=new int[10];
		for(int i=0;i<10;i++) {
			arr[i]=sc.nextInt();
			arr2[i]=arr[i]%42;
		}
		for(int i=0;i<10;i++) {
			for(int j=i+1;j<10;j++) {
				if(arr2[i]==arr2[j]) {
					count--;
					break;
				}
			}
		}
		System.out.println(count);
	}
}
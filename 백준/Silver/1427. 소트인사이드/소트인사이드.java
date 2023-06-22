import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		String s=sc.next();
		int a[]=new int[s.length()];
		for(int i=0;i<s.length();i++) {
			a[i]=Integer.parseInt(s.substring(i,i+1));
		}
		for(int i=0;i<s.length();i++) {
			int m=i;
			for(int j=i+1;j<s.length();j++) {
				if(a[j]>a[m])
					m=j;
			}
			if(a[i]<a[m]) {
				int temp=a[i];
				a[i]=a[m];
				a[m]=temp;
			}
		}
		for(int i=0;i<s.length();i++) {
			System.out.print(a[i]);
		}
	}
}

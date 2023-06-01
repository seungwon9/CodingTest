import java.util.*;
import java.io.*;
public class Main {

	public static void main(String[] args) throws NumberFormatException, IOException {
		// TODO Auto-generated method stub
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
		int N=Integer.parseInt(br.readLine());
		int cnt=0;
		long a[]=new long[N];
		StringTokenizer st=new StringTokenizer(br.readLine());
		for(int i=0;i<N;i++) {
			a[i]=Long.parseLong(st.nextToken());
		}
		Arrays.sort(a);
		for(int k=0;k<N;k++) {
			long f=a[k];
			int i=0;
			int j=N-1;
			while(i<j) {
				if(a[i]+a[j]==f) {
					if(i!=k && j!=k) {
						cnt++;
						break;
					}
					else if(i==k)
						i++;
					else if(j==k)
						j--;
				}
				else if(a[i]+a[j]<f)
					i++;
				else
					j--;
			}
		}
		System.out.print(cnt);
		br.close();
	}

}
